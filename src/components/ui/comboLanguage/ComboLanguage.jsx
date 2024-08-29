import { useContext } from "react";
import { Form } from "react-bootstrap";

import { TranslationContext } from "../../../services/translationContext/translation.context";
import useTranslation from "../../../custom/useTranslation/useTranslation";

const ComboLanguage = () => {
    const { language, changeLanguageHandler } = useContext(TranslationContext);

    const translate = useTranslation();

    const handleComboChange = (event) => {
        changeLanguageHandler(event.target.value);
    };

    return (
        <Form.Select onChange={handleComboChange}
            aria-label="Select Language"
            className=" mb-4"
            value={language}
        >
            <option value="es">{translate("spanish_lang")}</option>
            <option value="en">{translate("english_lang")}</option>
        </Form.Select>
    );
};

export default ComboLanguage;