## Hearthstone Viewer

### What is this

This is a webapp that lets you search and view Hearthstone cards

### Why was this made?

As a submission to NZMSA's phase 1

### Do you play Hearthstone?

No. At least not yet.

However, I do enjoy CCGs, that's why I chose to do a frontend for a Hearthstone related backend API.

### What API did you use?

[This one](https://hearthstonejson.com/)

### What features does it have?

It has a search bar, and allows for some sorting.
It also limits a maximum of 12 cards per page (3 rows x 4 columns). This limit is to limit the strain on the backend, and limit lag on the frontend trying to render too many cards.

Clicking on a card popups some details of the card.

Only "collectable" cards will be searched through.
