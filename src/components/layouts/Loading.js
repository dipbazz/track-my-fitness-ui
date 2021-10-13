import { VscLoading } from 'react-icons/vsc';

const Loading = () => (
  <>
    <div className="min-h-screen flex items-center justify-center">
      <div className="-mt-36 ">
        <VscLoading className="text-6xl animate-spin" />
      </div>
    </div>
  </>
);

export default Loading;
