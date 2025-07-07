import Mypic from "./assets/me.jpg"

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
        name: "Full Name",
        role: "role lorem ipsum",
        content: "Lorem ipsum dolor sit amet, consectetur iscing elit, sed do eiusmod tempor incididunt ut labore elit, tempor incididunt ut labore.",
        avatar: Mypic
    },
    {
        id: 2,
        name: "Sarah Johnson",
        role: "Frontend Developer",
        content: "Aymen delivered exceptional work on our project. His attention to detail and problem-solving skills are outstanding.",
        avatar: Mypic
    },
    {
        id: 3,
        name: "Mike Chen",
        role: "Product Manager",
        content: "Great communication and technical expertise. The project was completed ahead of schedule with excellent quality.",
        avatar: Mypic
    },
    {
        id: 4,
        name: "Emily Davis",
        role: "UI/UX Designer",
        content: "Working with Aymen was a pleasure. He understood our requirements perfectly and delivered beyond expectations.",
        avatar: Mypic
    },
    {
        id: 5,
        name: "David Wilson",
        role: "Tech Lead",
        content: "Solid developer with great problem-solving skills. Would definitely recommend for any web development project.",
        avatar: Mypic
    },
    {
        id: 6,
        name: "Lisa Anderson",
        role: "Startup Founder",
        content: "Aymen helped bring our vision to life with clean, efficient code. Professional and reliable throughout the project.",
        avatar: Mypic
    }
];

export default testimonials;