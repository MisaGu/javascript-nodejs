const path = require('path');
const Newsletter = require('../models/newsletter');
const Subscription = require('../models/subscription');
const sendMail = require('mailer').send;
const config = require('config');

exports.post = function*() {

  const newsletter = yield Newsletter.findOne({
    slug: this.request.body.slug
  }).exec();

  if (!newsletter) {
    this.throw(404, "Нет такой рассылки");
  }

  if (this.req.user && this.req.user.email == this.request.body.email) {

    var existingSubscription = yield Subscription.findOne({
      email:      this.request.body.email,
      newsletter: newsletter
    }).populate('newsletter').exec();

    if (existingSubscription) {
      if (existingSubscription.confirmed) {

        this.body = {
          message: `Вы уже подписаны.`
        };
        return;
      } else {
        // unconfirmed subscription to same email => confirm instantly for a logged-in user
        yield existingSubscription.persist({
          confirmed: true
        });

        this.body = {
          message: `Вы успешно подписаны, ждите писем на адрес ${existingSubscription.email}.`
        };
        return;
      }
    }

    var subscription = yield Subscription.create({
      email:      this.request.body.email,
      newsletter: newsletter,
      confirmed: true
    });

    this.body = {
      message: `Вы успешно подписаны, ждите писем на адрес ${subscription.email}.`
    };

  } else {
    var existingSubscription = yield Subscription.findOne({
      email:      this.request.body.email,
      newsletter: newsletter
    }).populate('newsletter').exec();

    if (existingSubscription) {
      if (existingSubscription.confirmed) {
        this.body = {
          message: `Вы уже подписаны.`
        };
        return;
      } else {

        //console.log(existingSubscription);

        yield* sendConfirmationLetter.call(this, existingSubscription, newsletter);

        this.body = {
          message: `Письмо-подтверждение отправлено заново на адрес ${existingSubscription.email}.`
        };
        return;
      }
    }


    var subscription = yield Subscription.create({
      email:      this.request.body.email,
      newsletter: newsletter,
      confirmed: false
    });

    yield* sendConfirmationLetter.call(this, subscription, newsletter);

    this.body = {
      message: `Проверьте почту ${subscription.email} и подтвердите подписку, перейдя по ссылке в письме.`
    };
  }


};


function* sendConfirmationLetter(subscription, newsletter) {

  yield sendMail({
    templatePath: path.join(this.templateDir, 'confirm-email'),
    newsletterTitle:   newsletter.title,
    subject:      "Подтверждение: " + newsletter.title,
    to:           subscription.email,
    link:         (config.server.siteHost || 'http://javascript.in') + '/newsletter/confirm/' + subscription.accessKey
  });

}
