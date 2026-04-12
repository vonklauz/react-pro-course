export const NotFoundPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <h1>404 - Такой страницы не существует</h1>
        <a href="/" className="block text-center text-blue-500 hover:underline">
          Перейти на главную
        </a>
      </div>
    </div>
  );
};
