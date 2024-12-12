const faqQuestions = document.querySelectorAll('.faq-question');

if (faqQuestions) {
    faqQuestions.forEach((question) => {
        question.addEventListener('click', () => {
            const faqBody = question.querySelector('.faq-question-body');
            const faqArrow = question.querySelector('.faq-arrow');

            if (faqBody.classList.contains('active')) {
                faqBody.style.maxHeight = faqBody.scrollHeight + "px";

                setTimeout(() => {
                    faqBody.style.maxHeight = "0";
                }, 0);

                faqBody.classList.remove('active');
            } else {
                // Закрывает другие блоки
                /* document.querySelectorAll('.faq-question-body.active').forEach((openBody) => {
                    openBody.style.maxHeight = "0";
                    openBody.classList.remove('active');
                }); */

                faqBody.classList.add('active');
                faqBody.style.maxHeight = faqBody.scrollHeight + "px";
            }

            if (faqArrow.classList.contains('opened')) {
                faqArrow.classList.remove('opened');
            } else {
                faqArrow.classList.add('opened');
            }
        });
    });
}
