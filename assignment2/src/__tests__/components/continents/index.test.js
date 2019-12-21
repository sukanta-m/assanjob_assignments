import Continents from "../../../components/continents";

const continents = [
  { code: "AF", name: "Afganistan" }
]
describe("Continents list", () => {
  let component;

  beforeEach(() => {
    component = shallow(<Continents list={continents} fetchContinents={sinon.spy()} />);
  })

  it("should render", () => {
    expect(component).not.toBeNull();
  });

  it("should render <List/>", () => {
    expect(component.find("List")).toHaveLength(1);
  });
})