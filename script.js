const { createApp } = Vue;
createApp({
    data () {
        return {
            projects: [
                {   id: 1,
                    name: "Website Design",
                    image: "project1.png",
                    description: "During fall 2022, I took the class Web Design for my masters program at MCAD.  For the course project, I chose to redesign eBay for  for a younger audience- 18 to 25 year olds. I chose young adults because eBay largely does not appeal to them, even though buying and selling secondhand goods are popular activities among that age group. The expected user for eBay currently is over the age of 25. Sites such as depop and grailed provide similar services to eBay, however they are more popular among 18-25 year olds than eBay. There are major differences between eBay and these websites in the visual designs and user experience. In order to redesign eBay to appeal to young adults, I wanted to create a design that is trendy, un-cluttered, and easy to use." },
                { 
                    id: 2,
                    name: "Package Design",
                    image: "project2.png",
                    description: "With all the menstrual products in the marketplace, many brands still use gender exclusive language and visuals, such as colors and words that exclude trans men and others under the gender diverse umbrella. For this project, I designed a brand identity including logo, packaging, and manual for gender inclusive menstrual products (tampons). To execute a visual identity that is successfully gender inclusive, I needed to consider all the elements of design that could imply gender such as color, typography, and imagery. The brand is named Mond, which is German for moon, to emphasize menstruation as a natural cycle" },
                { 
                    id: 3,
                    name: "Publication Design",
                    image: "project3.png",
                    description: "Cozy is a magazine dedicated to relaxing video games and gaming related content. I completed this project as part of a Typography course at Minneapolis College of Art and Design. We were asked to create a fictional magazine of our choosing including the cover, table of contents, an article spread, one page style guide, and mockup image. There are a number of gaming magazines in existence, but they mainly feature genres like first person shooter and cater to a mostly male audience. I wanted to create a magazine that features genres such as adventure, puzzles, simulation, and role-playing games with an aesthetic that is more relaxing and cheerful than the typical violence-centered gamer magazine." },
                { 
                    id: 4,
                    "name": "Website Study",
                    "image": "project4.png",
                    "description": "In the course Web Development, we were asked to use the atomic design system to study a website of our choice. I created a website for the case study of the chosen website's components and recreated the website using HTML and CSS. The website I chose to study and recreate was the website for the National Museum of Mexican Art." },
                { 
                    id: 5,
                    "name": "Animation",
                    "image":  "project5.png",
                    "description": "For the course Design in Context, we were asked to create a video describing what we want our design practice to be in 10 years. A friend recommended listening to Debbie Millman talk about her remarkable life exercise to help my thoughts about the project. With her exercise in mind, I created a storyboard and short animation in Procreate about a day in my life in 2032." },
                { 
                    id: 6,
                    "name": "Editorial Illustration",
                    "image": "project63.png",
                    "description": "This is a project for an Illustration Essentials course at Minneapolis College of Design in Spring 2022. We were asked to create an editorial illustration and a spot illustration for an article. Of the given options, I chose an article titled 'Chasing London's Mysterious Flock of Feral Birds' by Nick Hunt." }
            ]
        },
    },
}).mount("#myApp");