import React, { useState } from "react";
import CheckBoxButton from "./CheckBoxButton/CheckBoxButton";
import "./LeftContent.scss";
import UserIcon4 from "./assets/img2/img2.1";
import UserIcon3 from "./assets/img2/img2";
import UserIcon2 from "./assets/img1/img1.1";
import UserIcon1 from "./assets/img1/img1";
import OccaisonItem from "./OccaisonItem/OccaisonItem";
import CheckBox from "./CheckBox/CheckBox";
import Option from "./Option/Option";
import Select from "./Select/Select";
const LeftContent = () => {
  const [check, setCheck] = useState(false);
  const [checkHide, setCheckHide] = useState(false);
  const [option, setOption] = useState(false);
  const [hear, setHear] = useState(true);
  const [toInput, setToInput] = useState("");
  const [select, setSelect] = useState("0");
  const [selectedItem, setSelectedItem] = useState("");
  const [instructions, setInstructions] = useState(
    `My best friend Sorcha (pronounced Sor-sha) is getting married next week. We have been best friends since we were 5. She loves all your movies! Or favourite line is “You can’t sit with us!.” Please wish her good luck for the big day and lots of love from me.`
  );
  const [json, setJson] = useState({
    videoFor: "Myself",
    videoTo: "",
    occasion: "",
    instructions: instructions,
    hideVideo: false,
    deliveryOption: "£20",
    marketing_source: "",
  });

  const occaison = [
    "None",
    "Birthday",
    "Graduation",
    "Anniversary",
    "Roast",
    "Congratulations",
    "House warming",
    "New job",
    "Wedding",
    "Question",
    "Pep talk",
    "Thank you",
  ];
  return (
    <div className='leftContent__wrapper'>
      <div className='container'>
        <div className='container__video'>
          <h2>Who is this video for?</h2>
          <div className='buttons'>
            <CheckBoxButton
              style={{ marginRight: "0.8rem" }}
              onClick={() => {
                setCheck(!check);
                setJson({ ...json, videoFor: "Someone else" });
              }}
              text='Someone else'
              img={check ? <UserIcon2 /> : <UserIcon1 />}
              check={check}
            />
            <CheckBoxButton
              onClick={() => {
                setCheck(!check);
                setJson({ ...json, videoFor: "Myself" });
              }}
              text='Myself'
              img={check ? <UserIcon4 /> : <UserIcon3 />}
              check={!check}
            />
          </div>
          <div className='inputandspan'>
            <span>To</span>
            <input
              value={toInput}
              onChange={e => {
                setToInput(e.target.value);
                setJson({ ...json, videoTo: e.target.value });
              }}
              className='to'
              type='text'
              name='search'
              placeholder='Molly'
            />
          </div>
          <hr />
        </div>
        <div className='container__occasion'>
          <h2>Who is this video for?</h2>
          <div className='container__occasion_items'>
            {occaison.map((item, index) => (
              <OccaisonItem
                key={index}
                onClick={e => {
                  setJson({ ...json, occasion: item });
                  setSelectedItem(item);
                }}
                keys={item}
                text={item}
                isSelected={selectedItem === item ? true : false}
              />
            ))}
          </div>
          <hr />
        </div>
        <div className='container__instructions'>
          <h2>Instructions</h2>
          <p>My instructions for the talent are : </p>
          <textarea
            maxLength='500'
            value={instructions}
            onChange={e => {
              setInstructions(e.target.value);
              setJson({ ...json, instructions: e.target.value });
            }}
          ></textarea>
          <span className='max-characters'>max characters 500</span>
          <span className='tip'>
            Tip: If this is a gift don’t forget to add pronounciation
          </span>
          <CheckBox
            style={{ marginTop: "2rem", marginBottom: "2.5rem" }}
            onClick={() => {
              setCheckHide(!checkHide);
              setJson({ ...json, hideVideo: checkHide });
            }}
            text='Hide this video from {talent name’s} profile'
            checkbox={checkHide}
          />
          <hr />
        </div>
        <div className='container__delivery'>
          <h2>Delivery option</h2>
          <div className='container__delvery_items'>
            <Option
              onClick={() => {
                setOption(!option);
                setJson({ ...json, deliveryOption: "free" });
              }}
              price='FREE'
              name='Standard delivery'
              time='Receive within 7 days'
              choose={option}
            />
            <Option
              onClick={e => {
                setOption(!option);
                setJson({ ...json, deliveryOption: "£20" });
              }}
              price='£20'
              name='Express delivery'
              time='Receive in 24 hours'
              choose={!option}
            />
          </div>
          <hr />
        </div>
        <div className='container__hearAbout'>
          <span className='container__hearAbout_title'>
            Where did you hear about Thrillz?{" "}
          </span>
          <Select
            value='0'
            onChange={e => {
              setSelect(e.target.value);
              setJson({ ...json, marketing_source: e.target.value });
            }}
            id='slct'
            required='required'
            select={select}
          />
          <CheckBox
            style={{}}
            onClick={() => setHear(!hear)}
            text={
              <span>
                I agree to{" "}
                <a
                  style={{ fontWeight: "bold", textDecoration: "underline" }}
                  href='/'
                >
                  terms of service
                </a>{" "}
                and{" "}
                <a
                  style={{ fontWeight: "bold", textDecoration: "underline" }}
                  href='/'
                >
                  privacy coniditions
                </a>
              </span>
            }
            checkbox={hear}
          />
          {toInput === "" || instructions === "" || hear || select === "0" ? (
            <button className='container__hearAbout_btn disabled'>Next</button>
          ) : (
            <button
              onClick={() => console.log(json)}
              className='container__hearAbout_btn'
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeftContent;
