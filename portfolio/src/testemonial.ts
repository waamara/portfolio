import Mypic from "./assets/me.jpg"
import LD from "../src/assets/photo_5906813104682028146_y.jpg"

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
];

export default testimonials;