import "./Awareness.scss";
import {  useLayoutEffect, useRef } from "react";




const Awareness = () =>{
  const mainref = useRef(null);
  useLayoutEffect(() => {
    const wrapper = document.body,
    sections = [...mainref.current.querySelectorAll(".section")],
    closeButtons = [...mainref.current.querySelectorAll(".close-section")],
    expandedClass = "is-expanded",
    hasExpandedClass = "has-expanded-item";

  const initEvents = () => {
    sections.forEach((element) => {
      element.addEventListener("click", () => openSection(element));
    });
    closeButtons.forEach((element) => {
      element.addEventListener("click", (event) => {
        event.stopPropagation();
        closeSection(element.parentElement);
      });
    });
  };

  const openSection = (element) => {
    if (!element.classList.contains(expandedClass)) {
      element.classList.add(expandedClass);
      wrapper.classList.add(hasExpandedClass);
    }
  };


  const closeSection = (element) => {
    if (element.classList.contains(expandedClass)) {
      element.classList.remove(expandedClass);
      wrapper.classList.remove(hasExpandedClass);
    }
  };
  initEvents();

  },[])
  
  return (
    <main className="main" ref={mainref}>
      <section className="section">
        <div className="close-section">&times;</div>
        <div className="demo-box">
          <p>How to deal with fire</p>
          <p className = "isHidden">How are your your</p>
        </div>
      </section>
      <section className="section">
        <div className="close-section">&times;</div>
        <div className="demo-box">How to evalute from fire</div>
      </section>
      <section className="section">
        <div className="close-section">&times;</div>
        <div className="demo-box">How to use the app to confirm fire</div>
      </section>
      <section className="section">
        <div className="close-section">&times;</div>
        <div className="demo-box">Different fire situations</div>
      </section>
</main>
  )
}

export default Awareness
