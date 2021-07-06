# Refactored code

It is insde Task2/codeSnippetES6.js

# What doy ou think is wrong with the code, if anything?

To me the most glaring error is have this callback hell inside the .end().

I would try to encapsulate the steps inside the .end() method inside middlewares. For example one for invitationResponse. Set a controller for invitationResponse, and save the status. Depending on the status I would handle the exceptions. If the status was 201 I would next() to deal with the user in another controller.
Else send 400 status or send the invitation.

# Can you see any potential problems that could lead to exceptions?

Inside the User.findOneAndUpdate callback, the err is not handled at all. If something wrong happens with that query there could be an exceptions.

# How would you refactor this code to:

The main thing of this kind of implementation is that it is very coupled. It would be hard to test because there are not many deattached parts in the code. The correct way of implementing this would be to have a controller that deals with Users, a controller that deals with Shop and interact with eachoter using middlewares. This makes sure that bugs are more isolated.

Also, use async/await notation when possible to avoid callback hells.

Make use of encapsulation as much as possible. Make use of module.exports.

# How might you use the latest Javascript features to refactor the code?

function() { return } can be substituted by () => {}.

The callback hell can be avoided using async await and try {} catch (err) {}.

I do not particularly like exports.function notation. I would wrap all the functions under all the code and do module.exports = { function };
