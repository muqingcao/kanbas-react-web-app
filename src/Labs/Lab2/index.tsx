import "./index.css";
import Colors from "./Colors";
import Borders from "./Borders";
import MarginsAndPaddings from "./MarginsAndPaddings";
import Corners from "./Corners";
import Dimensions from "./Dimensions";
import RelativePosition from "./RelativePosition";
import AbsolutePosition from "./AbsolutePosition";
import FixedPosition from "./FixedPosition";
import ZIndex from "./ZIndex";
import Float from "./Float";
import GridLayout from "./GridLayout";
import Flex from "./Flex";
import ReactIconsSampler from "./ReactIconsSampler";
import BootstrapGridSystem from "./BootstrapGridSystem";
import BootstrapResponsiveGrid from "./BootstrapResponsiveGrid";
import ScreenSizeLabel from "./ScreenSizeLabel";
import BootstrapStyleTables from "./BootstrapStyleTables";
import BootstrapResponsiveTable from "./BootstrapResponsiveTable";
import BootstrapStyleLists from "./BootstrapStyleLists";
import BootstrapStyleHyperlinks from "./BootstrapStyleHyperlinks"
import BootstrapStyleForms from "./BootstrapStyleForms"
import BootstrapStyleDropdowns from "./BootstrapStyleDropdowns"
import BootstrapStyleSwitches from "./BootstrapStyleSwitches"
import BootstrapStyleRangeAndSliders from "./BootstrapStyleRangeAndSliders"
import BootstrapStyleAddons from "./BootstrapStyleAddons"
import BootstrapResponsiveForm from "./BootstrapResponsiveForm"
import BootstrapNavigationTabs from "./BootstrapNavigationTabs"
import BootstrapNavigationCards from "./BootstrapNavigationCards"

export default function Lab2() {
    return (
        <div className="container">
            <h2>Lab 2 - Cascading Style Sheets</h2>
            <h3>Styling with the STYLE attribute</h3>
            <p>
                Style attribute allows configuring look and feel
                right on the element. Although it's very convenient
                it is considered bad practice and you should avoid
                using the style attribute
            </p>

            <div id="wd-css-id-selectors">
                <h3>ID selectors</h3>
                <p id="id-selector-1">
                    Instead of changing the look and feel of all the
                    elements of the same name, e.g., P, we can refer
                    to a specific element by its ID
                </p>
                <p id="id-selector-2">
                    Here's another paragraph using a different ID and
                    a different look and
                    feel
                </p>
            </div>

            <div id="wd-css-class-selectors">
                <h3>Class selectors</h3>
                <p className="wd-class-selector">
                    Instead of using IDs to refer to elements, you
                    can use an element's CLASS attribute
                </p>
                <h4 className="wd-class-selector">
                    This heading has same style as paragraph above
                </h4>
            </div>
            <div id="wd-css-document-structure">
                <div className="wd-selector-1">
                    <h3>Document structure selectors</h3>
                    <div className="wd-selector-2">
                        Selectors can be combined to refer elements in particular
                        places in the document
                        <p className="wd-selector-3">
                            This paragraph's red background is referenced as
                            <br />
                            .selector-2 .selector3<br />
                            meaning the descendant of some ancestor.<br />
                            <span className="wd-selector-4">
                                Whereas this span is a direct child of its parent
                            </span><br />
                            You can combine these relationships to create specific
                            styles depending on the document structure
                        </p>
                    </div>
                </div>
            </div>

            <Colors />
            <Borders />
            <MarginsAndPaddings />
            <Corners />
            <Dimensions />
            <RelativePosition />
            <AbsolutePosition />
            <FixedPosition />
            <ZIndex />
            <Float />
            <GridLayout />
            <Flex />
            <ReactIconsSampler />
            <BootstrapGridSystem />
            <BootstrapResponsiveGrid />
            <ScreenSizeLabel />
            <BootstrapStyleTables />
            <BootstrapResponsiveTable />
            <BootstrapStyleLists />
            <BootstrapStyleHyperlinks />
            <BootstrapStyleForms />
            <BootstrapStyleDropdowns />
            <BootstrapStyleSwitches />
            <BootstrapStyleRangeAndSliders />
            <BootstrapStyleAddons />
            <BootstrapResponsiveForm />
            <BootstrapNavigationTabs />
            <BootstrapNavigationCards />
        </div>
    );
}