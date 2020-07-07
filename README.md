## Hearthstone Viewer

<https://hearthstone-viewer.azurewebsites.net/>

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

## DevOps

This application was deployed using Azure DevOps.

As you can see there are a lot of commit of me tring to figure out what went wrong. 
I realised I was in the wrong directory.

Since the specifications said I need to "Enable a continuous deployment to create releases on new commits to develop and master branches", I made the develop branch also a trigger.

Other than catching "compile errors", I don't see the point of it and would rather leave the trigger to be only the master branch.

I mostly followed <https://github.com/NZMSA/2020-Phase-1/tree/master/DevOps%20-%20Azure%20Pipeline> to deploy the web app, but I had to make some changes such as the directory.

The DevOps thing and the WebApp thing is in the same repository (this one), because it's the same thing.