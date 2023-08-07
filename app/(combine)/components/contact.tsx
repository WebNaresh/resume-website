import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { LocateIcon, Mail } from "lucide-react";
import { FaGlobeAsia } from "react-icons/fa";

type Props = {};

const Contact = (props: Props) => {
  return (
    <div className="my-24 mx-auto">
      <section className="mb-32">
        <div className="relative bg-fixed  h-[500px] overflow-hidden bg-cover bg-[50%] bg-no-repeat bg-[url('https://images.unsplash.com/photo-1598443492900-8c4179be28c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80')]"></div>
        <div className="container px-6 md:px-12">
          <div className="block rounded-lg bg-[hsla(0,0%,100%,0.7)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:py-16 md:px-12 -mt-[300px] backdrop-blur-[30px]">
            <div className="mb-12 grid gap-x-6 md:grid-cols-2 lg:grid-cols-3 justify-center ">
              <div className="mx-auto mb-6 text-center md:mb-0 flex flex-col items-center">
                <FaGlobeAsia className="m-4" />
                <h6 className="font-medium">India</h6>
              </div>
              <div className="mx-auto mb-6 text-center md:mb-0 flex flex-col items-center">
                <LocateIcon className="m-4" />
                <h6 className="font-medium">Maharashtra, Satara, 410802</h6>
              </div>
              <div className="mx-auto mb-6 text-center md:mb-0 flex flex-col items-center">
                <Mail className="m-4" />
                <h6 className="font-medium">nareshbhosale73@gmail.com</h6>
              </div>
            </div>
            <div className="mx-auto max-w-[700px]">
              <form>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <Input
                    className="bg-transparent"
                    type="text"
                    placeholder="Name"
                  />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <Input
                    type="email"
                    placeholder="Email"
                    className="bg-transparent"
                  />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <Textarea placeholder="Type your message here." />
                </div>
                <div className="mb-6 inline-block min-h-[1.5rem] justify-center md:flex w-full">
                  <Button className="w-full" size={"lg"}>
                    Send
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
