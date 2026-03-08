"use client";
import { useEffect, useState } from "react";
import { Op } from "../types/ops";

export function useOps() {
    const [ops, setOps] = useState<Op[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const customUrl = "https://frontend-challenge.veryableops.com/"

    useEffect(() => {
        async function fetchOps() {
            try {
                const res = await fetch(customUrl);
                if (!res.ok) throw new Error("Error [Response]: Failed to fetch data!");
                const data = await res.json();
                setOps(data);
            } catch (error) {
                setError("Error [Try]: Unable to fetch a response!");
            } finally {
                setLoading(false);
            }
        }
        fetchOps();
    }, []);

    return { ops, loading, error };
}