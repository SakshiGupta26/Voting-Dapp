import {createBrowserRouter}from "react-router-dom";
import GetVoterList from"../pages/Voter/GetVoterList";
import GetCandidate from "../pages/Cnadidate/GetCandidateList";
import RegisterCandidate from "../pages/Candidate/RegisterCandidate";
import RegisterVoter from  "../pages/Voter/RegisterVoter";
import  ElectionCommision from "../pages/ElectionCommision/ElectionCommision";
import App from "../App";
import Wallet from "../components/Wallet/Wallet";

export const routes = createBrowserRouter([
    {path:'/',element:<Wallet/>},
    {path:'register-voter ,element:<RegisterVoter></RegisterVoter>},
    {path:'register-candidate',element:<RegisterCandidate></RegisterCandidate>},
    {path:'voter-list',element:<GetVoterList></GetVoterList>},
    {path:'candidate-list',element:< GetCandidate></GetCandidate>},
    {path:'election-commision',element:<ElectionCommsion></ElectionCommsion>}
])