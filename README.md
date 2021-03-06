![MyUnsplash Logo](https://i.ibb.co/xqKjt3G/myunsplashlogo.jpg)

# MyUnsplash

[MyUnsplash](https://myunsplash-shaundnz.netlify.app/) is a simplified version of Unsplash. Upload images to share with everyone!

Project is hosted on Netlify, check it out [here!](https://myunsplash-shaundnz.netlify.app/)

This project was built to further my full stack development skills and provide an opportunity to experiment with new
technologies I had been interested in trying, specifically using a database hosted on AWS RDS, and libraries
`next-connect`, `next-joi` and `react-hook-form`.

![Demo gif](https://i.imgur.com/yMKdpZc.gif)

### Built With:

- Next.JS
- React
- ChakraUI
- Prisma ORM
- AWS RDS
- MySQL
- Netlify

Additional libraries used include: `joi`, `next-joi`, `next-connect`, `react-hook-form` and `swr`.

## Features:

### Responsive design

![Responsive design demo gif](https://i.imgur.com/b45IX86.gif)

Responsive design built using ChakraUI, application has 3 breakpoints for different size screens. Images are displayed
in 1 to 3 columns depending on this. Images have a different design for tablet and mobile users to be more touch screen
friendly.

### Filter Images

![Filter images demo gif](https://i.imgur.com/KKvHpe4.gif)

Displayed images will update as search query is entered, images displayed if the image label text contains a match with
the search query.

### Upload Images

![Upload image demo gif](https://i.imgur.com/yMKdpZc.gif)

Uploading images is easy! Enter your image URL and a label to accompany it, the input is then validated using `joi`. If
the input passes validation, request then is sent to `POST /api/images`, the image and label will be stored in the
database using `prisma`.

A modal will show the result of the image upload, if successful `swr` will then revalidate the data to update the shown
images to include our new image.

### Delete Images

![Delete image demo gif](https://i.imgur.com/Xfe6zcP.gif)

Clicking the delete button will send a `DELETE /api/images/:id` request, if a valid `id` is provided, `prisma` will then
delete the image from the database.

A modal will show the result of the image delete, deleted successfully, `swr` will then revalidate the data to update
images and remove the deleted image on the client browser.
