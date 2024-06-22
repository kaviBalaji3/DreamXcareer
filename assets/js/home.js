
$(document).ready(function () {

    // typing text
    const typedTextSpan = $(".typed-text");
    const cursorSpan = $(".cursor");

    const textArray = ["Dream", "Learn", "Achieve"];
    const typingDelay = 200;
    const erasingDelay = 100;
    const newTextDelay = 2000; // Delay between current and next text
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            if (!cursorSpan.hasClass("typing"))
                cursorSpan.addClass("typing");
            typedTextSpan.text(typedTextSpan.text() + textArray[textArrayIndex].charAt(charIndex));
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            cursorSpan.removeClass("typing");
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            if (!cursorSpan.hasClass("typing"))
                cursorSpan.addClass("typing");
            typedTextSpan.text(textArray[textArrayIndex].substring(0, charIndex - 1));
            charIndex--;
            setTimeout(erase, erasingDelay);
        } else {
            cursorSpan.removeClass("typing");
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) textArrayIndex = 0;
            setTimeout(type, typingDelay + 1100);
        }
    }

    if (textArray.length) setTimeout(type, newTextDelay + 250);
    // typing text

    // form 
    const inputs = $('input');
    const button = $('.formSubmitButton');
    const password = $('#password');
    const passwordMessage = $('#password-message');
    const passwordConstraints = 'Should be 8 to 40 characters. Lower case and upper case letters, at least one number and one symbol.';

    if (inputs.length) {
        inputs.each(function () {
            $(this).on('change', checkPattern);
        });
    }

    if (button.length) {
        button.on('click', lookForInvalidValues);
    }
    // form
});

function showPasswordConstraints() {
    passwordMessage.textContent = passwordConstraints;
    passwordMessage?.classList.add('password-constraint');
}

function checkPattern() {
    const input = this;
    const isPatternInvalid = input.validity.patternMismatch;

    giveFeedbackToUser(input, isPatternInvalid);
}

function lookForInvalidValues(e) {
    inputs.forEach(input => {
        if (input.validity.valid === false) {
            e.preventDefault();
        }

        const isValueMissing = input.validity.valueMissing;

        if (isValueMissing) {
            giveFeedbackToUser(input, isValueMissing);
        } else { return; }
    });
}

function giveFeedbackToUser(input, isInvalid) {
    const errorIcon = input.nextElementSibling;
    const errorMessage = errorIcon.nextElementSibling;

    if (isInvalid) {
        input?.classList.add('invalid');
        errorIcon?.classList.add('error');
        errorMessage?.classList.add('error');

        errorMessage.textContent = selectErrorMessage(input);

    } else {


        input?.classList.remove('invalid');
        errorIcon?.classList.remove('error');
        errorMessage?.classList.remove('error');
    }
}

function selectErrorMessage(input) {
    const label = input.getAttribute('aria-label');
    let message = '';

    if (input.value == '') {
        message = `${label} cannot be empty.`;
    } else {
        switch (label) {
            case 'First Name':
            case 'Last Name':
                message = `Please enter a valid ${label}.`;
                break;

            case 'Email Address':
                message = `Looks like this is not an email.
                   Valid email format: name@host.tld`;
                break;

            case 'Password':
                message = passwordConstraints;
                break;
        }
    }
    return message;
}

$(document).on('click', '.numberVButton', function (e) {
    $(".popup-overlay").css("display", "flex");
});

$(document).ready(function () {
    $('#date').val(new Date().toISOString().slice(0, 10));
    $('.otpNumber').keyup(function () {
        if (this.value.length === this.maxLength) {
            $(this).next('.otpNumber').focus();
        }
    });
});
$(document).on('click', '.popup-overlay, .modal-bg', function (e) {
    if (e.target.className == 'popup-overlay') {
        $(".popup-overlay").hide();
    }
    if (e.target.className.includes('modal-bg')) {
        $(".modal-bg").hide();
    }
})

