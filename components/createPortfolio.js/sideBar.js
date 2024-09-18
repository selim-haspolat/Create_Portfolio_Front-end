import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AddComponentsList from "../add-component/add-components-list";
import { Separator } from "@/components/ui/separator"

const SideBar = ({ object, objects, selectedObject, setObjects }) => {

  return (
    <div className="w-96 h-full overflow-y-auto p-3 border-l border-">
      <Tabs defaultValue="object">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="object">{object?.type.toUpperCase() || "-"}</TabsTrigger>
          <TabsTrigger value="components">Components</TabsTrigger>
        </TabsList>
        <Separator className='my-2'/>
        <TabsContent value="object">
          Make changes to your object here.
        </TabsContent>
        <TabsContent value="components">
          <AddComponentsList objects={objects} selectedObject={selectedObject} setObjects={setObjects}/>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SideBar;
