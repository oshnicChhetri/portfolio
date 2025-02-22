import { FormEvent, useState } from "react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

interface EmailData {
  from_name: string;
  from_email: string;
  message: string;
}

const Contact = () => {
  const [emailData, setEmailData] = useState<EmailData>({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await emailjs.send(
        "service_krrvzqg", // Replace with your EmailJS Service ID
        "template_bdmfeef", // Replace with your EmailJS Template ID
        { ...emailData } as Record<string, unknown>,
        "OH3oG559NN6ddE6ZV" // Replace with your EmailJS Public Key
      );

      if (response.status === 200) {
        setEmailData({ from_name: "", from_email: "", message: "" });
        toast.success("Email sent successfully!");
      }
    } catch (error) {
      toast.error("Failed to send email. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
   <div className="min-h-screen  bg- flex flex-col items-center justify-center px-6 py-12  text-white">
      <h1 className="text-4xl font-extrabold mb-8">Contact Me</h1>

      <form
        className="border-solid border-2 border-gray-300 shadow-xl rounded-2xl p-8 w-full max-w-[50rem] 
  bg-[#121212] bg-[radial-gradient(ellipse_100%_100%_at_50%_50%,rgba(140,139,220,0.2),rgba(10,10,10,0.8))]"
        onSubmit={handleSubmit}
      >
        <div className="mb-6">
          <label className="block text-white font-semibold mb-2">
            Your Name
          </label>
          <input
            type="text"
            placeholder="John Doe"
            value={emailData.from_name}
            onChange={(e) =>
              setEmailData({ ...emailData, from_name: e.target.value })
            }
            className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-white font-semibold mb-2">
            Your Email
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            value={emailData.from_email}
            onChange={(e) =>
              setEmailData({ ...emailData, from_email: e.target.value })
            }
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block white font-semibold mb-2">
            Your Message
          </label>
          <textarea
            placeholder="Write your message here..."
            value={emailData.message}
            onChange={(e) =>
              setEmailData({ ...emailData, message: e.target.value })
            }
            className="text-black w-full p-4 border border-gray-300 rounded-lg h-40 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-4 text-white font-bold rounded-lg transition ${
            loading
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

         <p className="text-gray-700 mt-2">
          📧 Email: <span className="text-blue-600 font-semibold">oshnicchhetri75@gmail.com</span>
        </p>
      </form>

      
    </div>
  );
};

export default Contact;
