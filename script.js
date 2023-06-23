const localStorageKey = 'list-for-task'

function validateNewTask()

{
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")

    let inputValue = document.getElementById('input-task').value

    let exists = values.find(x => x.name == inputValue)

    return !exists ? false : true 
}

function newTask ()

{
    let input = document.getElementById('input-task')
    input.style.border = ''

    if(!input.value)
    {
        input.style.border = '1px solid red'
        alert('Digite algo para inserir em sua lista')
    }
    
        else if(validateNewTask())
        {
            alert('Já existe uma task com essa descrição.')
        }
        else
        {
            let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
            values.push({
                name:input.value
            })
            localStorage.setItem(localStorageKey,JSON.stringify(values))
            showValues()
        }
        input.value = ''
}

function showValues()
{
    {
        let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
        let list = document.getElementById('to-do-list')
        list.innerHTML = ''
        for(let i = 0; i < values.length; i++)

{
    list.innerHTML += `<li>${values[i]['name']}<button id='btn-ok' onclick='removeItem("${values[i]['name']}")'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-check-fill" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zm8.854-9.646a.5.5 0 0 0-.708-.708L7.5 7.793 6.354 6.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
  </svg></button></li>`
    }
}
}

    function removeItem(data)
{
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let index = values.findIndex(x => x.name == data)
    values.splice(index,1)
    localStorage.setItem(localStorageKey,JSON.stringify(values))
    showValues()
}
    
showValues()
