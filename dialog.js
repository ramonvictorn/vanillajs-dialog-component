console.log('dialog js file')

function hideDialog() {
    const modal = document.querySelector('.modal')
    if (modal) {
      modal.remove()
    }
}

const dialog = (body, options) => {
    const modal = document.createElement('div')
    modal.classList.add('modal')

    const bodyMsg = `<p class="text-center">  ${body} </p>`
    const content = document.createElement('div')
    content.classList.add('content')

    const controls = `
        <div class='controls flex justify-center justify-items-center'>
            ${(options.map((option) => {
                return (
                   `<button class="options-button" onclick="window.dialog.click('${option.value}')">${option.title}</button>`
                )
            })).join('')}
        </div>
    `

    content.innerHTML = bodyMsg + controls

    modal.appendChild(content)
    document.body.appendChild(modal)

    return new Promise((resolve) => {
        window.dialog.click = (value) => {
            hideDialog();
            resolve(value);
        }
    })
}

window.dialog = dialog;

setTimeout(async () => {
    const response = await window.dialog('Are you sure you want continue?', [
        {
            title: 'yes',
            value: 'Yes'
        },
        {
            title: 'no',
            value: 'Cancel'
        },
    ])
}, 500);