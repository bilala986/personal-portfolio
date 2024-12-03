// Select the 'Read more' button
let readMoreButton = document.querySelector('.readMore');

// Create a new paragraph element for "Read more" text
let paragraph = document.createElement('p');
paragraph.innerHTML = "I'm 18 years old and currently learning to code full-stack websites. I’m passionate about expanding my skills in web development, and I’m excited about the opportunities ahead as I grow in this field. Outside of coding, I really enjoy playing sports — it's a great way for me to stay active and have fun. I’m a hardworking person, always striving to do my best in everything I take on. People often say I have a good personality, and I try to bring positivity and a friendly attitude to whatever I do";

// Add the click event listener to the 'Read more' button
readMoreButton.onclick = function() {
    // Append the paragraph if it's not already added
    if (!document.querySelector('.about-text p.new-paragraph')) {
        paragraph.classList.add('new-paragraph');
        document.querySelector('.about-text').appendChild(paragraph);

        // Change the button text to "Show less"
        readMoreButton.innerHTML = 'Show less';
    } else {
        // If the paragraph exists, remove it and revert to "Read more"
        document.querySelector('.about-text').removeChild(paragraph);
        readMoreButton.innerHTML = 'Read more';
    }
};


/*
let submitButton = document.getElementById('submit');
submitButton.onclick = alert('You have successfully submitted your form!');
*/