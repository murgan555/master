
/* =========================================
   MURGAN — FINAL JAVASCRIPT
   ========================================= */


/* CONTACT LINKS */

const WHATSAPP_URL = "https://wa.me/639609251790";

const TELEGRAM_INVITE_URL =
  "https://t.me/+ZUIgoHYITy5iZGY9";

const OFFICIAL_WEBSITE =
  "https://reddy88.win/";


/* PREFILLED MESSAGE */

const DEFAULT_MESSAGE =
  "Hello MURGAN! Could you please provide me !D ?";


/* WHATSAPP MESSAGE URL */

const whatsappMessageURL =
  `${WHATSAPP_URL}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;


/* TELEGRAM SHARE URL
   Telegram opens its share interface.
   The visitor chooses the chat or group.
*/

const telegramShareURL =
  `https://t.me/share/url?url=${encodeURIComponent(TELEGRAM_INVITE_URL)}&text=${encodeURIComponent(DEFAULT_MESSAGE)}`;


/* SET CONTACT LINKS */

function configureContactLinks() {

  const whatsappIds = [
    "whatsappLink",
    "whatsappLinkBottom"
  ];

  const telegramIds = [
    "telegramLink",
    "telegramLinkBottom"
  ];


  whatsappIds.forEach(function(id) {

    const element = document.getElementById(id);

    if (element) {
      element.href = whatsappMessageURL;
    }

  });


  telegramIds.forEach(function(id) {

    const element = document.getElementById(id);

    if (element) {
      element.href = telegramShareURL;
    }

  });

}


/* FAQ ACCORDION */

function configureFAQ() {

  const questions = document.querySelectorAll(
    ".faq-question"
  );

  questions.forEach(function(question) {

    question.addEventListener("click", function() {

      const answerId =
        question.getAttribute("aria-controls");

      const answer =
        document.getElementById(answerId);

      if (!answer) return;

      const isOpen =
        question.getAttribute("aria-expanded") === "true";


      // Close all FAQ items

      questions.forEach(function(otherQuestion) {

        const otherId =
          otherQuestion.getAttribute("aria-controls");

        const otherAnswer =
          document.getElementById(otherId);

        otherQuestion.setAttribute(
          "aria-expanded",
          "false"
        );

        const icon =
          otherQuestion.querySelector("span");

        if (icon) icon.textContent = "+";

        if (otherAnswer) {
          otherAnswer.hidden = true;
        }

      });


      // Open the selected FAQ

      if (!isOpen) {

        question.setAttribute(
          "aria-expanded",
          "true"
        );

        answer.hidden = false;

        const icon =
          question.querySelector("span");

        if (icon) icon.textContent = "−";

      }

    });

  });

}


/* FOOTER YEAR */

function updateFooterYear() {

  const yearElement =
    document.getElementById("currentYear");

  if (yearElement) {
    yearElement.textContent =
      new Date().getFullYear();
  }

}


/* INITIALIZE */

document.addEventListener(
  "DOMContentLoaded",
  function() {

    configureContactLinks();

    configureFAQ();

    updateFooterYear();

  }
);
