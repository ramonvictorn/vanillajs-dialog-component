console.log('index js file 2')

function renderUserOptionSelected (value) {
    const oldResponse = document.querySelector('.response')
    if (oldResponse) {
        oldResponse.remove()
    }

    const textContainer = document.createElement('div')
    textContainer.classList.add('text-center');

    const bodyMsg = `<p> You just clicked "${value}" </p>`;
    textContainer.innerHTML = bodyMsg;
    document.body.appendChild(textContainer)
}

async function clickme() {
    console.log("clickme");
    const response = await dialog('Are you sure you want continue?', [
        {
            title: 'yes',
            value: 'yesValue'
        },
        {
            title: 'no',
            value: 'noValue'
        },
    ])
    console.log('clickme response', response);
    renderUserOptionSelected(response)
}