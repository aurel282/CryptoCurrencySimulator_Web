/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

interface Socket {
  on(event: string, callback: (data: any) => void );
  emit(event: string, data: any);
}
