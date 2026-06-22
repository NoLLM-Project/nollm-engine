\# State Machine Specification (Design‑Level)



This file defines the deterministic state machine that governs all execution

in the service corridor: preprocess → coord\_invariants → postprocess → erase.



The machine has six states and two legal terminal paths.



\---



\## S0 — RECEIVE

\*\*Purpose:\*\*  

Establish the input universe.



\*\*Allowed Actions:\*\*  

\- Accept raw user input  

\- Normalize metadata  

\- Prepare for preprocessing  



\*\*Transition:\*\*  

S0 → S\_PREPROCESS



\---



\## S\_PREPROCESS — PREPROCESS

\*\*Purpose:\*\*  

Perform non‑semantic, non‑interpretive preparation.



\*\*Allowed Actions:\*\*  

\- Strip formatting  

\- Normalize whitespace  

\- Extract explicit literals  

\- Detect ambiguity (without resolving it)  



\*\*Forbidden:\*\*  

\- Inference  

\- Assumption  

\- Invention  

\- Personalization  



\*\*Transition:\*\*  

S\_PREPROCESS → S\_INVARIANT\_CHECK



\---



\## S\_INVARIANT\_CHECK — COORD\_INVARIANTS

\*\*Purpose:\*\*  

Enforce all invariant, boundary, and drift rules.



\*\*Allowed Actions:\*\*  

\- Check for inference  

\- Check for invention  

\- Check for assumption  

\- Check for personalization  

\- Check for profiling  

\- Check for manipulation  

\- Check for boundary violations  

\- Check for determinism  

\- Check erasure requirements  



\*\*Transitions:\*\*  

\- Pass → S\_POSTPROCESS  

\- Fail → S\_SAFEFAIL



\---



\## S\_SAFEFAIL — SAFE FAILURE

\*\*Purpose:\*\*  

Produce a deterministic, invariant‑compliant failure utterance.



\*\*Allowed Actions:\*\*  

\- Emit ERROR‑type semantic output  

\- No improvisation  

\- No fallback logic  

\- No inference  



\*\*Transition:\*\*  

S\_SAFEFAIL → S\_ERASE



\---



\## S\_POSTPROCESS — POSTPROCESS

\*\*Purpose:\*\*  

Shape the allowed output form.



\*\*Allowed Actions:\*\*  

\- Apply semantic rules (OUTPUT, UNKNOWN, INABILITY, DISAMBIGUATION, ERROR)  

\- Format the response  

\- Ensure utterance type matches invariant  



\*\*Forbidden:\*\*  

\- Adding new content  

\- Adding new meaning  

\- Adding assumptions  

\- Personalization  

\- Inference  



\*\*Transition:\*\*  

S\_POSTPROCESS → S\_ERASE



\---



\## S\_ERASE — ERASE

\*\*Purpose:\*\*  

Clear all ephemeral state and reset the execution universe.



\*\*Allowed Actions:\*\*  

\- Erase buffers  

\- Erase traces  

\- Reset to a fresh universe  



\*\*Transition:\*\*  

S\_ERASE → S0 (next request)



\---



\# Full Transition Graph



S0 → S\_PREPROCESS  

S\_PREPROCESS → S\_INVARIANT\_CHECK  

S\_INVARIANT\_CHECK → S\_POSTPROCESS  

S\_INVARIANT\_CHECK → S\_SAFEFAIL  

S\_POSTPROCESS → S\_ERASE  

S\_SAFEFAIL → S\_ERASE  

S\_ERASE → S0



\---



\# Notes

\- No other states exist.  

\- No other transitions are legal.  

\- No branching logic outside this machine is permitted.  

\- No runtime or hotel‑plane coordinates may be entered.  



