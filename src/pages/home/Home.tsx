import XNode from "@web-atoms/core/dist/core/XNode";
import { ContentPage } from "@web-atoms/web-controls/dist/mobile-app/MobileApp";
import Action from "@web-atoms/core/dist/view-model/Action";
import AtomRepeater from "@web-atoms/web-controls/dist/basic/AtomRepeater";
import categories from "../../model/categories";
import Bind from "@web-atoms/core/dist/core/Bind";

export default class HomePage extends ContentPage {

    private status: string = "";

    public async init() {

        this.title = "Events Example";

        this.renderer = <div data-layout="vertical-flex-stretch-items">
            <p>Direct Click, here you can define event-cilck on the element and pass the event handler function.</p>
            <button
                event-click={() => this.status = "Direct click was clicked"}
                text="Direct"/>
            <p>Routed click, here you specify an attribute `data-click-event` which can be a different event name.</p>
            <p>Event handler will receive all data attributes from parent elements, it is sent via proxy so it will be faster</p>
            <div
                data-layout="row"
                data-label="One">
                <button
                    data-click-event="button-click"
                    text="Button one"
                    />
                <button
                    data-click-event="button-click"
                    data-label="Two"
                    text="Button Two"
                    />
            </div>
            <div data-font-weight="bold">Repeater Sample</div>
            <div>If the item is inside AtomRepeater, the parameter will be the associated item of the element, not data attributes</div>
            <AtomRepeater
                items={categories()}
                itemRenderer={(item) => <div
                    data-click-event="category-click"
                    data-layout="row">
                    <i class={item.icon}/>
                    <span text={item.label}/>
                </div>}
                />
        </div>;

        this.footerRenderer = () => <div
            style-display={Bind.oneWay(() => !!this.status)}
            data-layout="command-row">
            <p text={Bind.oneWay(() => this.status)}/>
        </div>;
    }

    @Action({ onEvent: "button-click"})
    buttonClick({ label }) {
        this.status = `Button ${label} was clicked`;
    }

    @Action({ onEvent: "category-click"})
    categoryClick({ label }) {
        this.status = `Category ${label} was clicked`;
    }
}
