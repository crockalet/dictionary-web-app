interface ErrorMessageProps {
    title: string;
    message: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ title, message}) => {

 return <div className="flex flex-col gap-y-6 mt-32 text-center">
  <p className="text-6xl mb-5">😕</p>
  <p className="font-bold">{title}</p>
  <p className="text-gray-300">{message}</p>
</div>
}