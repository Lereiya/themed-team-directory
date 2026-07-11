# 🇰🇪 Themed Team Directory

Hey there! 👋 This is my Week 6 React assignment - a team directory app that shows off lifting state up and Context API working together.

## What's This All About?

So basically, I built this app that has two main things going on:

1. **A search bar** that filters through team members in real-time (the search state is "lifted up" to the parent component so both the search bar and user list can share it)

2. **A dark/light theme toggle** that uses React Context to change the whole app's appearance - and the toggle button is nested 3 levels deep just to prove Context works without all that prop drilling headache!

## The Team

I used Kenyan names for the team because, well, that's where I'm from! 🇰🇪 We've got:

- Tracy Belinda from Nairobi
- Joshua Baraka from Kisumu  
- Stacy Njeri from Nakuru
- Moraine Wanjiru from Mombasa
- Joan Gachenia from Eldoret
- Emma Wanjiku from Thika
- Peter Karanja from Nairobi
- John Tingoi from Kitale
- David Simiyu from Bungoma
- Moses Kirui from Kericho

## What You Can Do

- 🔍 **Search** - Type any name, email, city, or company and watch the list update instantly
- 🌓 **Toggle themes** - Click the button and the whole app changes from light to dark (and back)
- 📱 **Responsive** - Works on your phone, tablet, or desktop
- 👀 **See team details** - Each card shows name, username, email, phone, company, and city

## Tech Stack

- React (obviously 😄)
- Context API for the theme stuff
- CSS Grid for the card layout
- Vite for fast development

## How to Run It

Super simple:

```bash
# Clone the repo
git clone [your-repo-url]

# Go into the folder
cd themed-team-directory

# Install dependencies
npm install

# Start the dev server
npm run dev
