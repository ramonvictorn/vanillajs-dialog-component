console.log('dialog js file')
const dialog = (body, options) => {
    const modal = document.createElement('div')
    modal.classList.add('modal')

    const bodyMsg = `<p> ${body} </p>`
    const content = document.createElement('div')
    content.classList.add('content')

    const controls = `
        <div class='controls'>
            ${options.map((option) => {
                return (
                   `<button onclick="window.dialog.click('${option.value}')">${option.title}</button>`
                )
            })}
        </div>
    `

    content.innerHTML = bodyMsg + controls

    modal.appendChild(content)
    document.body.appendChild(modal)

    return new Promise((resolve) => {
        window.dialog.click = (value) => {
            resolve(value)
        }
    })
}

window.dialog = dialog;

setTimeout(async () => {
    const response = await window.dialog('Are you sure you want continue?', [
        {
            title: 'yes',
            value: 'yesValue'
        },
        {
            title: 'no',
            value: 'noValue'
        },
    ])
    console.log('response', response)
}, 500);