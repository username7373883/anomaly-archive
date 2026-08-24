const usernameText =
    document.getElementById("usernameText");

const passwordText =
    document.getElementById("passwordText");

const statusText =
    document.getElementById("statusText");


const bootScreen =
    document.getElementById("boot-screen");

const accessScreen =
    document.getElementById("access-screen");

const dashboard =
    document.getElementById("dashboard");


const fakeUsername =
    "**-****-*****";

const fakePassword =
    "************";


function wait(ms) {

    return new Promise(
        resolve =>
            setTimeout(
                resolve,
                ms
            )
    );

}


function typeText(
    element,
    text,
    speed = 80
) {

    return new Promise(
        resolve => {

            let index = 0;

            element.textContent = "";


            const interval =
                setInterval(
                    () => {

                        element.textContent +=
                            text.charAt(index);

                        index++;


                        if (
                            index >=
                            text.length
                        ) {

                            clearInterval(
                                interval
                            );

                            resolve();

                        }

                    },
                    speed
                );

        }
    );

}


async function runSequence() {

    await wait(900);


    statusText.textContent =
        "Loading registered operator credentials...";


    await typeText(
        usernameText,
        fakeUsername,
        75
    );


    await wait(400);


    await typeText(
        passwordText,
        fakePassword,
        50
    );


    await wait(650);


    statusText.textContent =
        "Checking clearance...";


    await wait(1100);


    statusText.textContent =
        "Matching personnel registry...";


    await wait(900);


    statusText.textContent =
        "Verifying archive permissions...";


    await wait(900);


    statusText.textContent =
        "Establishing secure archive session...";


    await wait(900);


    statusText.textContent =
        "ACCESS GRANTED";


    await wait(750);


    bootScreen.classList.add(
        "hidden"
    );


    accessScreen.classList.remove(
        "hidden"
    );


    await wait(1500);


    accessScreen.classList.add(
        "hidden"
    );


    dashboard.classList.remove(
        "hidden"
    );

}


runSequence();
