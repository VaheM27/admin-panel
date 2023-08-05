import { useState } from "react";
import { addData } from "../../services/addData";

import styles from "./AddData.module.css";

export default function AddData() {
  const [name, setName] = useState();
  const [backgroundImage, setBackgroundImage] = useState();
  const handleChange = (e) => {
    setName(e.currentTarget.value);
  };

  const handleTitle = (e) => {
    setBackgroundImage(e.currentTarget.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await addData({
        name: name,
        img: backgroundImage,
      });
      if (data) {
        setName("");
        setBackgroundImage("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          placeholder="Add name value"
          onChange={handleChange}
          value={name}
          className={styles.inputStyle}
        />
        <input
          placeholder="Add image value"
          onChange={handleTitle}
          value={backgroundImage}
          className={styles.inputStyle}
        />

        <button type="submit" className={styles.addButton}>
          Add Data
        </button>
      </form>
    </div>
  );
}
