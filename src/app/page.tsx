import Head from 'next/head';
import Navegacao from "@/app/sections/navegacao";
import Homepage from "@/app/sections/homepage";
import GlowCursor from "@/app/components/glowCursor";
import React from "react";
import Expertise from "@/app/sections/expertise";
import Certificados from "@/app/sections/certificados";
import Contato from "@/app/sections/contato";

export default function Home() {
  return (
    <div>     
      <GlowCursor />
      <Navegacao />
      <section id="home">
        <Homepage />
      </section>
      <section id="expertise">
        <Expertise />
      </section>
      <section id="certificados">
        <Certificados />
      </section>
      <section id="contato">
        <Contato />
      </section>
    </div>
  );
}
