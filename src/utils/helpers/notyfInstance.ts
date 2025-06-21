// utils/notyfInstance.ts - Solución para SSR
import { Notyf } from "notyf";
import "notyf/notyf.min.css";
import notyfOptions from "@utils/helpers/notyfOptions";

class NotyfSingleton {
  private static instance: Notyf | null = null;

  public static getInstance(): Notyf {
    // Verificar que estamos en el cliente
    if (typeof window === "undefined") {
      throw new Error("Notyf solo puede ser usado en el cliente");
    }

    // En SSR + client-side navigation, es mejor recrear la instancia
    // cada vez para evitar problemas con el DOM
    if (NotyfSingleton.instance) {
      try {
        // Verificar si la instancia anterior sigue siendo válida
        const container = document.querySelector(".notyf");
        if (!container || !document.body.contains(container)) {
          console.log("🔄 Contenedor Notyf perdido, recreando...");
          NotyfSingleton.instance = null;
        }
      } catch (error) {
        console.warn("⚠️ Error verificando contenedor Notyf:", error);
        NotyfSingleton.instance = null;
      }
    }

    if (!NotyfSingleton.instance) {
      console.log("✨ Creando nueva instancia de Notyf para SSR");

      // Asegurar que el DOM esté completamente cargado
      if (document.readyState === "loading") {
        console.warn("⚠️ DOM aún cargando, esperando...");
        return NotyfSingleton.createWhenReady();
      }

      NotyfSingleton.instance = new Notyf(notyfOptions);

      // Verificar que se creó correctamente
      setTimeout(() => {
        const container = document.querySelector(".notyf");
        if (!container) {
          console.error("❌ No se pudo crear el contenedor Notyf");
        } else {
          console.log("✅ Contenedor Notyf creado correctamente");
        }
      }, 100);
    }

    return NotyfSingleton.instance;
  }

  private static createWhenReady(): Notyf {
    // Crear instancia cuando el DOM esté listo
    return new Promise<Notyf>((resolve) => {
      const checkReady = () => {
        if (
          document.readyState === "complete" ||
          document.readyState === "interactive"
        ) {
          NotyfSingleton.instance = new Notyf(notyfOptions);
          resolve(NotyfSingleton.instance);
        } else {
          setTimeout(checkReady, 50);
        }
      };
      checkReady();
    }) as any; // Type assertion para mantener compatibilidad
  }

  // Método para forzar recreación
  public static reset(): void {
    console.log("🔧 Reset forzado de Notyf");

    // Limpiar contenedor existente
    const container = document.querySelector(".notyf");
    if (container) {
      container.remove();
    }

    NotyfSingleton.instance = null;
  }
}

export default NotyfSingleton;
