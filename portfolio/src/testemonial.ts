import Mypic from "./assets/me.jpg"
import LD from "../src/assets/photo_5906813104682028146_y.jpg"
import AA from "../src/assets/image0.jpg"

export interface Testimonial {
    id: number;
    name: string;
    role: string;
    content: string;
    avatar: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Aymen Berbiche",
        role: "Full stack Developer",
        content: "all i can say about me is that i did it ",
        avatar: Mypic
    },
    {
        id: 2,
        name: "Lydia ",
        role: "Frontend Developer",
        content: "Working with ACC has been a great experience. He’s a skilled and dependable web developer who consistently delivers high-quality work. His professionalism, problem-solving ability, and team spirit made him a valuable part of every project",
        avatar: LD
    },
    {
        id:3, 
        name: "Abderrahmane LEMMOUCHI", 
        role: "CS student and creator of Devshroom club 🍄",
        content:"Working with Aymen has been a truly rewarding experience.  What sets him apart, however, is his exceptional communication and tutoring abilities. He explains complex concepts with clarity and patience, making collaboration easy and productive. Aymen is a great team player and mentor.",
        avatar:AA
    },
];

export default testimonials;