/* ********************************************readMore1********************************************** */

// Select the 'Read more' button
let readMoreButton = document.querySelector('.readMore1');

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




















/* ********************************************readMore2********************************************** */

document.addEventListener('DOMContentLoaded', () => {
    // Select the 'Read more' button
    let readMoreButton2 = document.querySelector('.readMore2');

    // Create a new paragraph element for "Read more" text
    let paragraph2 = document.createElement('p');
    paragraph2.innerHTML = `Our team of experienced and compassionate teachers brings an incredible depth of knowledge in Tajweed, Tafsir, and Quranic studies, ensuring that every lesson is not only educational but also spiritually transformative. They are dedicated to making the Quran accessible and meaningful, offering personalized guidance to help you uncover its timeless wisdom and relevance to your life. The learning process in our club is thoughtfully designed to accommodate individuals of all skill levels, from beginners to advanced learners, allowing everyone to grow at their own pace in a positive, welcoming, and encouraging environment. As a member of our Quran Reading Club, you’ll have the opportunity to participate in engaging group discussions, reflective readings, and enriching sessions that deepen your understanding of the Quran’s teachings while fostering a sense of community. Our goal is to create a space where you can nurture your spiritual growth, strengthen your bond with the Quran, and experience the joy of learning alongside like-minded individuals who share your commitment to faith. We warmly invite you to join us on this transformative journey, where every moment spent in study and reflection becomes a step closer to a deeper connection with the divine.`;

    // Add the click event listener to the 'Read more' button
    readMoreButton2.onclick = function () {
        // Find the description container
        let descContainer = document.querySelector('.desc');

        // Append the paragraph if it's not already added
        if (!document.querySelector('.desc p.new-paragraph')) {
            paragraph2.classList.add('new-paragraph');
            descContainer.appendChild(paragraph2);

            // Change the button text to "Show less"
            readMoreButton2.innerHTML = 'Show less';
        } else {
            // If the paragraph exists, remove it and revert to "Read more"
            descContainer.removeChild(document.querySelector('.desc p.new-paragraph'));
            readMoreButton2.innerHTML = 'Read more';
        }
    };
});

























/* ********************************************readMore3********************************************** */

document.addEventListener('DOMContentLoaded', () => {
    // Select all 'Read more' buttons
    let readMoreButtons = document.querySelectorAll('.readMore3');

    // Add event listener to each button
    readMoreButtons.forEach((button) => {
        button.addEventListener('click', () => {
            // Find the nearest description container
            let descContainer = button.closest('.desc');

            // Create a new paragraph element
            let paragraph = descContainer.querySelector('.new-paragraph');
            if (!paragraph) {
                paragraph = document.createElement('p');
                paragraph.classList.add('new-paragraph');
                paragraph.innerHTML = `The process of creating this website may also push you to explore new technologies, improve your understanding of front-end and back-end development, and develop a stronger grasp of organizing and presenting information effectively. This cheat sheet website stands as a testament to your ability to identify practical solutions to common problems and implement them through coding, demonstrating both creativity and technical skill. Beyond its utility for your own projects, it could also serve as a valuable resource for other developers, fostering collaboration and knowledge-sharing within the coding community.`;
                descContainer.appendChild(paragraph);

                // Change button text to "Show less"
                button.innerHTML = 'Show less';
            } else {
                // If the paragraph exists, remove it and revert button text
                descContainer.removeChild(paragraph);
                button.innerHTML = 'Read more';
            }
        });
    });
});























document.addEventListener('DOMContentLoaded', () => {
    // Read more texts for each project
    const readMoreTexts = {
        readMore4: `Whether it’s bold, playful fonts, elegant script, or experimental typography, the variety of text stylings adds personality and charm, emphasizing the artistic spirit of the platform. The website serves as both a source of inspiration for art and craft enthusiasts and a testament to the power of combining design with creativity to produce something truly unique. By blending functionality with visual appeal, Dasmotot's Arts and Crafts demonstrates your ability to build a platform that not only captures attention but also encourages exploration, creativity, and appreciation for the world of handmade art. It’s more than just a website; it’s a celebration of creativity, where every element – from the images to the text – comes together in harmony to inspire and delight its audience.`,
        readMore5: `Users can easily navigate through different categories or explore featured collections, discovering an ever-expanding gallery of breathtaking visuals. Fotomatic also serves as an inspiration hub for artists, designers, and photography enthusiasts, offering ideas and concepts through its diverse array of images and unique styling techniques. Whether you're looking for a serene landscape, abstract art, or bold urban photography, Fotomatic delivers a seamless browsing experience that invites exploration and sparks creativity. This project not only highlights your passion for photography but also demonstrates your technical skills in creating a visually appealing and functional platform, blending artistic expression with modern web design principles to create a destination for anyone who loves the power of visual art.`,
        readMore6: ` From subtle gradients and bold color contrasts to intricate font pairings and responsive header tags, every detail is thoughtfully presented to ensure usability and inspiration. Beyond its utility, My Website Style Guide is a testament to your ability to blend creativity with functionality, demonstrating your deep understanding of CSS and its potential to elevate web design. By building this resource, you’ve not only created a tool to streamline your own workflow but also established a foundation for consistent and visually appealing designs across your projects. The interactive and visually rich nature of the site reflects a keen eye for detail and a passion for the art of coding, making it an indispensable companion for your web development journey.`,
        readMore7: `Additionally, the website includes a well-organized location section, making it effortless for customers to find and visit Tea Cozy’s physical store. The layout and design of the website are thoughtfully executed, with a harmonious use of colors, typography, and imagery that reflects the cozy, inviting nature of the brand. Every element, from the calming visuals to the intuitive navigation, works together to create an enjoyable user experience. By showcasing the unique aspects of Tea Cozy and emphasizing its commitment to quality, the website not only attracts tea enthusiasts but also reinforces the brand’s identity as a destination for exceptional teas and a welcoming atmosphere. This project is a testament to your design skills and ability to create a website that effectively communicates a brand’s values while delivering both aesthetic and functional excellence.`,
        readMore8: `Adding a personal touch, the website introduces the dedicated and experienced staff who make these journeys possible, emphasizing their expertise, compassion, and dedication to ensuring every detail is meticulously planned and executed. The design of the website is both elegant and user-friendly, aligning with the sacred and serene nature of the service it represents. Each section is thoughtfully organized to guide visitors seamlessly through the offerings, mission, and team behind Umrah Experience, creating a sense of trust and reliability. By combining a compelling narrative with a visually appealing and informative layout, the website not only advertises the business effectively but also serves as a beacon of inspiration for those preparing to embark on their spiritual journey. This project reflects your ability to create a platform that captures the essence of a brand while delivering both functionality and emotional resonance.`,
    };

    // Add event listeners to all 'Read more' buttons
    document.querySelectorAll('strong[class^="readMore"]').forEach((button) => {
        button.addEventListener('click', () => {
            const key = button.classList[0]; // Identify which 'Read more' button was clicked
            const parentDesc = button.closest('.desc'); // Find the correct description container
            const existingParagraph = parentDesc.querySelector('p.additional-content');

            if (!existingParagraph) {
                // Create and append new paragraph
                const paragraph = document.createElement('p');
                paragraph.classList.add('additional-content');
                paragraph.textContent = readMoreTexts[key];
                parentDesc.appendChild(paragraph);

                // Change button text
                button.textContent = 'Show less';
            } else {
                // Remove existing paragraph
                parentDesc.removeChild(existingParagraph);

                // Revert button text
                button.textContent = 'Read more';
            }
        });
    });
});
















/*
let submitButton = document.getElementById('submit');
submitButton.onclick = alert('You have successfully submitted your form!');
*/

// Select the slider and the output span
const slider = document.getElementById('rate');
const output = document.getElementById('rateValue');

// Update the span whenever the slider value changes
slider.addEventListener('input', () => {
    // Round the slider value to the nearest integer
    let sliderValue = Math.round(slider.value);
    output.textContent = sliderValue;  // Display the rounded integer value
});




























