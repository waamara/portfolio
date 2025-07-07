import Switch from "../assets/switch.png"

const TestimonialCard = ({ testimonial }) => {
    return (
        <div className="flex flex-col rounded-xl bg-[#131314] border-[1px] border-[#A1CDFF14] p-4 h-full">
            <div className="flex flex-row pb-4">
                <div className="pr-6">
                    <img
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-14 rounded-xl"
                    />
                </div>
                <div>
                    <p className="text-xl text-white">{testimonial.name}</p>
                    <p className="text-gray-400">{testimonial.role}</p>
                </div>
            </div>
            <div className="flex-1">
                <p className="text-white">{testimonial.content}</p>
                <div className="flex justify-end -mt-5">
                    <button>
                        <img src={Switch || "/placeholder.svg"} alt="Switch" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;