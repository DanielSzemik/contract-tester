import './InputBox.css';
import { ethers } from "ethers";
import detectEthereumProvider from '@metamask/detect-provider';

const InputBox = () => {

    async function sendTransaction() {
        const params = {
            nonce: document.getElementById("in1").value,
            gasPrice: document.getElementById("in2").value,
            from: document.getElementById("in5").value,
            value: document.getElementById("in6").value,
            data: document.getElementById("in7").value,
            chainId: document.getElementById("in8").value,
        }
        const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        signer.sendTransaction(params).then((transaction) => {
            console.dir(transaction);
            alert("Send finished!");
        });
    }

    return (
        <div className="background">
            <div className="label">nonce</div>
            <div className="text-input-box">
                <input type="text" autocomplete="off" className="input" id="in1" name="in1" defaultValue="0x00"></input>
            </div>
            <div className="label">gas price</div>
            <div className="text-input-box">
                <input type="text" autocomplete="off" className="input" id="in2" name="in2" defaultValue="0x09184e72a000"></input>
            </div>
            <div className="label">from</div>
            <div className="text-input-box">
                <input type="text" autocomplete="off" className="input" id="in5" name="in5"></input>
            </div>
            <div className="label">value</div>
            <div className="text-input-box">
                <input type="text" autocomplete="off" className="input" id="in6" name="in6" defaultValue="0x00"></input>
            </div>
            <div className="label">data</div>
            <div className="text-input-box">
                <input type="text" autocomplete="off" className="input" id="in7" name="in7" defaultValue="0x7f7465737432000000000000000000000000000000000000000000000000000000600057"></input>
            </div>
            <div className="label">chainID</div>
            <div className="text-input-box">
                <input type="text" autocomplete="off" className="input" id="in8" name="in8" defaultValue="0x3"></input>
            </div>

            <button onClick={sendTransaction} className="send">
                Send
            </button>
        </div>


    )
}

export default InputBox;