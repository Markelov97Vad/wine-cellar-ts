function LoadingLoginPage() {
  return (
    <div className="spinner">
    <div className="spinner__pulse-container">
      <div className="spinner__pulse-bubble spinner__pulse-bubble_type_1"></div>
      <div className="spinner__pulse-bubble spinner__pulse-bubble_type_2"></div>
      <div className="spinner__pulse-bubble spinner__pulse-bubble_type_3"></div>
    </div>
  </div>
  );
}

export default LoadingLoginPage;
