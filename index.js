function renderUserOptionSelected (value) {
    const oldResponse = document.querySelector('.response')
    if (oldResponse) {
        oldResponse.remove()
    }

    const textContainer = document.createElement('div')
    textContainer.classList.add('text-center');
    textContainer.classList.add('response');

    const bodyMsg = `<p> You just clicked "${value}" </p>`;
    textContainer.innerHTML = bodyMsg;
    document.body.appendChild(textContainer)
}

async function clickme() {
    const response = await dialog('Are you sure you want continue?', [
        {
            title: 'yes',
            value: 'yes'
        },
        {
            title: 'Cancel',
            value: 'no'
        },
    ])

    renderUserOptionSelected(response)
}