import InputNumber from '../asset/components/Input/InputNumber.js';
import InputText from '../asset/components/Input/InputText.js';
import SubTitle from '../asset/components/SubTitle/index.js';
import { INPUT_ID, SUB_TITLE_TEXT } from '../asset/constants/dom-rule.js';

export default class InventoryTap {
    constructor($skeleton) {
        this.$app = document.createElement('div');
        this.$productNameInput = InputText(INPUT_ID.productName);
        this.$productPriceInput = InputNumber(INPUT_ID.productPrice);
        this.$productQuantityInput = InputNumber(INPUT_ID.productQuantity);

        $skeleton.append(this.$app);
    }

    appendToApp($element) {
        this.$app.append($element);
    }

    init() {
        this.createAddProductForm();
    }

    createAddProductForm() {
        const $wrap = document.createElement('div');
        const $subTitle = SubTitle(SUB_TITLE_TEXT.addProduct);
        const $inputWrap = document.createElement('div');

        this.$productPriceInput.style.margin = '0 5px';
        $inputWrap.append(this.$productNameInput);
        $inputWrap.append(this.$productPriceInput);
        $inputWrap.append(this.$productQuantityInput);
        $wrap.append($subTitle);
        $wrap.append($inputWrap);
        this.appendToApp($wrap);
    }
}
