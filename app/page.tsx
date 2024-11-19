"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TextGenerateEffectExample } from "@/components/ui/textGenerateEffect";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { useToast } from "@/hooks/use-toast";
import { Overpass_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const overPass = Overpass_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-overPass",
  weight: ["300", "400", "500", "600", "700"],
});

const date = new Date();
const year = date.getFullYear();

export default function Home() {
  const [email, setEmail] = useState("");
  const toast = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://hook.us1.make.com/opry7ec9g82a2pd2eo44vnsx126g8v1h",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );

      // Se o envio for bem-sucedido, atualiza a mensagem de sucesso
      if (response.ok) {
        toast.toast({
          title: "E-mail enviado com sucesso!",
          description: "Fique atento ao seu e-mail para mais informações.",
        });
      } else {
        toast.toast({
          title: "Erro ao enviar o e-mail.",
          description: "Por favor, tente novamente mais tarde.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error(error);
      toast.toast({
        title: "Erro ao enviar o e-mail.",
        description: "Por favor, tente novamente mais tarde.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col select-none">
      <header className="w-[65%] mx-auto mt-8 flex justify-between items-center">
        <Image src="/logo.svg" alt="logo" width={150} height={150} />

        <Button asChild>
          <Link href="https://wa.me/557788500766" target="_blank">
            Fale conosco
          </Link>
        </Button>
      </header>
      <main className="flex-grow w-[65%] mx-auto mt-8 flex flex-col items-center justify-center">
        <section className="flex flex-col gap-4 -mt-40 items-center justify-center">
          <h1
            className={`text-[60px] leading-[72px] text-center  ${overPass.className}`}
          >
            EXPERIÊNCIA DA NOVA GERAÇÃO DE AGENTES{" "}
            <span className="text-blue-500">IA</span> PARA NEGÓCIOS
          </h1>
          <div className="flex flex-col gap-1">
            <p className="text-xl leading-4 text-center mx-auto font-light">
              <TextGenerateEffectExample
                text="Aumente suas conversões e melhore o atendimento ao cliente 24/7 com agentes de IA"
                duration={0.3}
              />
            </p>
            <p className="text-xl leading-4 text-center w-[70%] mx-auto font-light">
              <TextGenerateEffectExample
                text="Que entendem e interagem como humanos."
                duration={0.5}
              />
            </p>
          </div>

          <div className="flex flex-col items-center justify-center mt-6">
            <form
              onSubmit={handleSubmit}
              className="flex w-full max-w-sm items-center justify-center"
            >
              <Input
                type="email"
                placeholder="E-mail"
                className="focus-visible:outline-none focus-visible:ring-1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" className="rounded-l-none">
                <span className="flex items-center gap-2">
                  {/* <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" /> */}
                  Lista de espera
                </span>
              </Button>
            </form>
          </div>
        </section>
      </main>
      <footer className="flex items-center justify-center py-4 gap-3">
        <Image src="/icon.svg" alt="icon" width={30} height={30} />
        <p className="text-gray-600 text-sm">{`© ${year} Rubnik | Todos os Direitos Reservado`}</p>
      </footer>
      <BackgroundBeams />
    </div>
  );
}
