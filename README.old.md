# Contacts App

You will create an app that you can add and edit contacts.

## Setup

1. Use `create-react-app` to create a React app.
2. Install Material UI, React Router, and Redux.
3. Setup a theme and an `AppBar` for your app.

## Add Routes

Break up your app into routes. Example URLs:

- `/`: List contacts
- `/add`: "Add A Contact" form
- `/delete/:key`: Present a confirmation page when deleting the contact. If you answer `OK`, delete the contact and direct the user to list page. If you cancel, just bring the user back.

## Add Contact Form

1. Create an add contact form with the following fields: name, e-mail, phone number, address, city, state, and zip code
2. When "added" the contact should show up in a list below the add form.
3. Use Redux so when contacts are add the contacts are save in Redux and are persistent between routes.

## Contact List

1. Create some initial data that will always populate your list on reload.
2. The contact list should always be sorted in alphabetical order by `name`.
3. The initial view of the list should only show the contact's name, city, and state.
4. When clicked the contact's entire information should be displayed.

## Editing and Deleting

1. Create a way to delete contacts.
2. Create a way to edit contacts. Try to reuse your add form in some way so you don't have to create two different forms.

## Add localStorage

- Use `localStorage` to save contacts that are added. When adding the contact make sure you store some unique key or ID to store the contact so it's easy to find when deleting.
- When the page is loaded check for locally stored contacts. If there are none, initialize new storage.
- Deletes should be deleted from `localStorage` also.

## Bonus: Success Messages

Come up with a way to display messages when Adds and Deletes are successful.

## Bonus: Favorites

1. Add a way to mark contacts as your favorite
2. Add a way to just see favorites and hide the others

## Bonus: Search

1. Add a search box above your contact list.
2. When typing use the entered text to filter down the list of contacts shown.
3. The search should search through all field values.
