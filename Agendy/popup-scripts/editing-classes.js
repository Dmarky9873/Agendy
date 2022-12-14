/*
    This controls all the editing of the classes, so it makes the most
    writes to the db. This was the first thing I made once I learned that
    LocalStorage exists. I love it.

    *LocalStorage is similar to cookies, so shouldn't be cleared often unless user prompts.*
    
    TODO: Make it so that when you open the editing classes, it shows all the previous classes so that you don't have to rewrite everything if you wanna just edit one class.

    TODO: Make sure everything is cleared properly when editing classes (especially due date assignments)
*/


// Makes a button that when clicked saves everything
const save = document.getElementById('save')
document.addEventListener('DOMContentLoaded', function() {
    save.addEventListener('click', function() {
        updateClasses()
    }, false)
}, false)

// Function that does the saving
function updateClasses() {

    // Initializing all the variables to the value inside each of the inputs
    userClassA = document.getElementById('class-a').value
    classADesc = document.getElementById('class-a-desc').value
    userClassB = document.getElementById('class-b').value
    classBDesc = document.getElementById('class-b-desc').value
    userClassC = document.getElementById('class-c').value
    classCDesc = document.getElementById('class-c-desc').value
    userClassD = document.getElementById('class-d').value
    classDDesc = document.getElementById('class-d-desc').value
    userClassE = document.getElementById('class-e').value
    classEDesc = document.getElementById('class-e-desc').value
    userClassF = document.getElementById('class-f').value
    classFDesc = document.getElementById('class-f-desc').value
    userClassG = document.getElementById('class-g').value
    classGDesc = document.getElementById('class-g-desc').value
    userClassH = document.getElementById('class-h').value
    classHDesc = document.getElementById('class-h-desc').value

    // Checks to see if you left anything blank, and if you didn't will save everything in the db
    if (userClassA == '' || userClassB == '' || userClassC == '' || userClassD == '' || userClassE == '' || userClassF == '' || userClassG == '' || userClassH == '') {
        // Alerts user that save was unsuccessful
        document.getElementById('save-alert').innerHTML = "Classes not updated, you left some fields blank. (Descriptions are optional)"
        document.getElementById('save-alert').classList.remove('alert-secondary')
        document.getElementById('save-alert').classList.add('alert-danger')
    } else {
        // Doing the actual saving inside of localStorage
        localStorage.setItem('class-a', userClassA)
        localStorage.setItem('class-a-desc', classADesc)
        localStorage.setItem('class-b', userClassB)
        localStorage.setItem('class-b-desc', classBDesc)
        localStorage.setItem('class-c', userClassC)
        localStorage.setItem('class-d-desc', classCDesc)
        localStorage.setItem('class-d', userClassD)
        localStorage.setItem('class-d-desc', classDDesc)
        localStorage.setItem('class-e', userClassE)
        localStorage.setItem('class-e-desc', classEDesc)
        localStorage.setItem('class-f', userClassF)
        localStorage.setItem('class-f-desc', classFDesc)
        localStorage.setItem('class-g', userClassG)
        localStorage.setItem('class-g-desc', classGDesc)
        localStorage.setItem('class-h', userClassH)
        localStorage.setItem('class-h-desc', classHDesc)

        // Blanking out everything inside of the class details
        localStorage.setItem('class-a-notes', '')
        localStorage.setItem('class-b-notes', '')
        localStorage.setItem('class-c-notes', '')
        localStorage.setItem('class-d-notes', '')
        localStorage.setItem('class-e-notes', '')
        localStorage.setItem('class-f-notes', '')
        localStorage.setItem('class-g-notes', '')
        localStorage.setItem('class-h-notes', '')

        // I dont think I've ever used this thing in the db but it exists and I dont want to remove it and kill everything
        var today = new Date()
        localStorage.setItem('day-of-week', today.getDay())

        // Clearing out everything inside the inputs so that it looks pretty
        // * Might be better to not do this as user might have made mistake and now needs to redo everything * 
        document.getElementById('class-a').value = ''
        document.getElementById('class-a-desc').value = ''
        document.getElementById('class-b').value = ''
        document.getElementById('class-b-desc').value = ''
        document.getElementById('class-c').value = ''
        document.getElementById('class-c-desc').value = ''
        document.getElementById('class-d').value = ''
        document.getElementById('class-d-desc').value = ''
        document.getElementById('class-e').value = ''
        document.getElementById('class-e-desc').value = ''
        document.getElementById('class-f').value = ''
        document.getElementById('class-f-desc').value = ''
        document.getElementById('class-g').value = ''
        document.getElementById('class-g-desc').value = ''
        document.getElementById('class-h').value = ''
        document.getElementById('class-h-desc').value = ''

        // Alerts user that save was successful
        document.getElementById('save-alert').innerHTML = "Classes updated! Open the extension to view."
        document.getElementById('save-alert').classList.remove('alert-secondary')
        document.getElementById('save-alert').classList.add('alert-success')
    }
}