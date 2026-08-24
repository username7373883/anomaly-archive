const usernameText = document.getElementById("usernameText");
const passwordText = document.getElementById("passwordText");
const statusText = document.getElementById("statusText");

const bootScreen = document.getElementById("boot-screen");
const accessScreen = document.getElementById("access-screen");
const dashboard = document.getElementById("dashboard");

const fakeUsername = "DR_HARLOW_L4";
const fakePassword = "************";

function typeText(element, text, speed = 80) {
    return new Promise((resolve) => {
        let i = 0;
        element.textContent = "";

        const interval = setInterval(() => {
            element.textContent += text.charAt(i);
            i++;

            if (i >= text.length) {
                clearInterval(interval);
                resolve();
            }
        }, speed);
    });
}

function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function runSequence() {
    await wait(1200);

    statusText.textContent = "Injecting operator credentials...";
    await typeText(usernameText, fakeUsername, 90);

    await wait(500);
    await typeText(passwordText, fakePassword, 60);

    await wait(700);
    statusText.textContent = "Checking clearance...";
    await wait(1400);

    statusText.textContent = "Matching personnel file...";
    await wait(1200);

    statusText.textContent = "Verifying archive permissions...";
    await wait(1200);

    statusText.textContent = "Access granted.";
    await wait(1000);

    bootScreen.classList.add("hidden");
    accessScreen.classList.remove("hidden");

    await wait(1800);

    accessScreen.classList.add("hidden");
    dashboard.classList.remove("hidden");
}

runSequence();
