import { createClient } from '@supabase/supabase-js';
const URL = 'https://zitvoywwbucmyqpgjsif.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InppdHZveXd3YnVjbXlxcGdqc2lmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA4NTA0NTIsImV4cCI6MjAwNjQyNjQ1Mn0.ZKxe4DQ7otHDlNHVQNnLHy2l3Mf9ampw_N-omSRsVYk';

const supabase=createClient(URL, API_KEY);

export default supabase