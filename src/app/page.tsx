import Header from "@/components/Header";
import InputForm from "@/components/InputForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center bg-grey-500 w-screen h-screen">
      <main className="flex flex-col w-screen h-screen">
        <Header/>
        <InputForm/>
        <Footer/>
      </main>
    </div>
  );
}
