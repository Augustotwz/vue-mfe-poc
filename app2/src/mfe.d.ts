declare module "shell/RootStore";
declare module "shell/bootloader";

declare module "shell/TheNavbar" {
    import { defineComponent } from "vue";
    import { RouteRecordRaw } from "vue-router";

    interface Props {
        routes: RouteRecordRaw[]
    }
    
    const TheNavbar: ReturnType<typeof defineComponent<Props>>;

    export default TheNavbar;
  }
