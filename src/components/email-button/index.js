'use client'

const EmailButton = () => {
    const handleClick = () => {
        window.location.href = `mailto:poriua.219@gmail.com`;
      };
    return (
        <button className="mt-4 px-6 py-4 bg-black text-white rounded-full self-start" onClick={handleClick}>Contact me</button>
    );
}

export default EmailButton;